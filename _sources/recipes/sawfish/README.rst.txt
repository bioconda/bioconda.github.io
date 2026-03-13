:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sawfish'
.. highlight: bash

sawfish
=======

.. conda:recipe:: sawfish
   :replaces_section_title:
   :noindex:

   Joint structural variant and copy number variant caller for HiFi sequencing data

   :homepage: https://github.com/PacificBiosciences/sawfish
   :license: Pacific Biosciences Software License Agreement
   :recipe: /`sawfish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sawfish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sawfish/meta.yaml>`_

   


.. conda:package:: sawfish

   |downloads_sawfish| |docker_sawfish|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.1-0</code>,  <code>2.2.0-0</code>,  <code>2.1.1-0</code>,  <code>2.1.0-0</code>,  <code>2.0.5-0</code>,  <code>2.0.4-0</code>,  <code>2.0.3-0</code>,  <code>2.0.2-0</code>,  <code>2.0.1-1</code>,  </span></summary>
      

      ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.5-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.12.10-0``,  ``0.12.9-0``,  ``0.12.8-0``,  ``0.12.7-0``,  ``0.12.6-0``,  ``0.12.5-0``,  ``0.12.4-0``,  ``0.12.3-0``,  ``0.12.2-0``,  ``0.12.1-0``

      
      .. raw:: html

         </details>
      

   

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

    pixi global install sawfish

to add into an existing workspace instead, run::

    pixi add sawfish

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sawfish

Alternatively, to install into a new environment, run::

    conda create -n envname sawfish

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sawfish:<tag>

(see `sawfish/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sawfish| image:: https://img.shields.io/conda/dn/bioconda/sawfish.svg?style=flat
   :target: https://anaconda.org/bioconda/sawfish
   :alt:   (downloads)
.. |docker_sawfish| image:: https://quay.io/repository/biocontainers/sawfish/status
   :target: https://quay.io/repository/biocontainers/sawfish
.. _`sawfish/tags`: https://quay.io/repository/biocontainers/sawfish?tab=tags


.. raw:: html

    <script>
        var package = "sawfish";
        var versions = ["2.2.1","2.2.0","2.1.1","2.1.0","2.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sawfish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sawfish/README.html