:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chromosight'
.. highlight: bash

chromosight
===========

.. conda:recipe:: chromosight
   :replaces_section_title:
   :noindex:

   Detect loops \(and other patterns\) in Hi\-C contact maps.

   :homepage: https://github.com/koszullab/chromosight
   :license: OTHER / Artistic
   :recipe: /`chromosight <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromosight>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromosight/meta.yaml>`_

   


.. conda:package:: chromosight

   |downloads_chromosight| |docker_chromosight|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.3-0</code>,  <code>1.6.2-0</code>,  <code>1.6.1-0</code>,  <code>1.6.0-0</code>,  <code>1.5.1-0</code>,  <code>1.5.0-0</code>,  <code>1.4.1-0</code>,  <code>1.3.3-0</code>,  <code>1.3.1-0</code>,  </span></summary>
      

      ``1.6.3-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.1-0``,  ``1.3.3-0``,  ``1.3.1-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.9.9-0``,  ``0.9.8-0``,  ``0.9.7-0``,  ``0.9.5-0``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.2-0``,  ``0.8.0-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.1-0``,  ``0.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on cooler: 
   :depends on docopt: 
   :depends on jsonschema: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on python: ``>=3.6``
   :depends on scikit-learn: 
   :depends on scipy: ``>=1.3``

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

    pixi global install chromosight

to add into an existing workspace instead, run::

    pixi add chromosight

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install chromosight

Alternatively, to install into a new environment, run::

    conda create -n envname chromosight

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/chromosight:<tag>

(see `chromosight/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_chromosight| image:: https://img.shields.io/conda/dn/bioconda/chromosight.svg?style=flat
   :target: https://anaconda.org/bioconda/chromosight
   :alt:   (downloads)
.. |docker_chromosight| image:: https://quay.io/repository/biocontainers/chromosight/status
   :target: https://quay.io/repository/biocontainers/chromosight
.. _`chromosight/tags`: https://quay.io/repository/biocontainers/chromosight?tab=tags


.. raw:: html

    <script>
        var package = "chromosight";
        var versions = ["1.6.3","1.6.2","1.6.1","1.6.0","1.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chromosight/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chromosight/README.html