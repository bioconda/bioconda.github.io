:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haystac'
.. highlight: bash

haystac
=======

.. conda:recipe:: haystac
   :replaces_section_title:
   :noindex:

   Species identification pipeline for both single species and metagenomic samples.

   :homepage: https://github.com/antonisdim/haystac
   :documentation: https://haystac.readthedocs.io/en/master/
   
   :license: MIT / MIT
   :recipe: /`haystac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haystac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haystac/meta.yaml>`_

   


.. conda:package:: haystac

   |downloads_haystac| |docker_haystac|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.12-0</code>,  <code>0.4.11-0</code>,  <code>0.4.10-0</code>,  <code>0.4.9-0</code>,  <code>0.4.8-0</code>,  <code>0.4.7-0</code>,  <code>0.4-0</code>,  <code>0.3.2-0</code>,  <code>0.3.1-0</code>,  </span></summary>
      

      ``0.4.12-0``,  ``0.4.11-0``,  ``0.4.10-0``,  ``0.4.9-0``,  ``0.4.8-0``,  ``0.4.7-0``,  ``0.4-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3-0``,  ``0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on numpy: ``2.0.0.*``
   :depends on pandas: ``2.2.2.*``
   :depends on psutil: ``5.7.2.*``
   :depends on python: ``3.9.19.*``
   :depends on pyyaml: ``5.4.1.*``
   :depends on requests: ``2.24.0.*``
   :depends on snakemake-minimal: ``6.3.0.*``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install haystac

to add into an existing workspace instead, run::

    pixi add haystac

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install haystac

Alternatively, to install into a new environment, run::

    conda create -n envname haystac

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/haystac:<tag>

(see `haystac/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_haystac| image:: https://img.shields.io/conda/dn/bioconda/haystac.svg?style=flat
   :target: https://anaconda.org/bioconda/haystac
   :alt:   (downloads)
.. |docker_haystac| image:: https://quay.io/repository/biocontainers/haystac/status
   :target: https://quay.io/repository/biocontainers/haystac
.. _`haystac/tags`: https://quay.io/repository/biocontainers/haystac?tab=tags


.. raw:: html

    <script>
        var package = "haystac";
        var versions = ["0.4.12","0.4.11","0.4.10","0.4.9","0.4.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haystac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haystac/README.html