:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nextalign'
.. highlight: bash

nextalign
=========

.. conda:recipe:: nextalign
   :replaces_section_title:
   :noindex:

   Viral genome alignment

   :homepage: https://github.com/nextstrain/nextclade
   :documentation: https://docs.nextstrain.org/projects/nextclade/en/stable/
   
   :license: MIT / MIT
   :recipe: /`nextalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextalign/meta.yaml>`_
   :links: doi: :doi:`10.21105/joss.03773`

   


.. conda:package:: nextalign

   |downloads_nextalign| |docker_nextalign|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.14.0-2</code>,  <code>2.14.0-1</code>,  <code>2.14.0-0</code>,  <code>2.13.1-0</code>,  <code>2.13.0-0</code>,  <code>2.12.0-0</code>,  <code>2.11.0-0</code>,  <code>2.10.1-0</code>,  <code>2.9.1-0</code>,  </span></summary>
      

      ``2.14.0-2``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.13.1-0``,  ``2.13.0-0``,  ``2.12.0-0``,  ``2.11.0-0``,  ``2.10.1-0``,  ``2.9.1-0``,  ``2.9.0-1``,  ``2.9.0-0``,  ``2.8.0-0``,  ``2.7.0-0``,  ``2.5.0-0``,  ``2.4.0-0``,  ``2.3.1-0``,  ``2.3.0-0``,  ``2.2.0-0``,  ``2.1.0-0``,  ``2.0.0-0``,  ``1.11.0-0``,  ``1.10.3-0``,  ``1.10.2-0``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.9.0-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.7.0-0``,  ``1.6.0-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.5-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.3-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.6-2``,  ``0.1.6-1``,  ``0.1.6-0``

      
      .. raw:: html

         </details>
      

   

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install nextalign

to add into an existing workspace instead, run::

    pixi add nextalign

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nextalign

Alternatively, to install into a new environment, run::

    conda create -n envname nextalign

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nextalign:<tag>

(see `nextalign/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nextalign| image:: https://img.shields.io/conda/dn/bioconda/nextalign.svg?style=flat
   :target: https://anaconda.org/bioconda/nextalign
   :alt:   (downloads)
.. |docker_nextalign| image:: https://quay.io/repository/biocontainers/nextalign/status
   :target: https://quay.io/repository/biocontainers/nextalign
.. _`nextalign/tags`: https://quay.io/repository/biocontainers/nextalign?tab=tags


.. raw:: html

    <script>
        var package = "nextalign";
        var versions = ["2.14.0","2.14.0","2.14.0","2.13.1","2.13.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nextalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nextalign/README.html