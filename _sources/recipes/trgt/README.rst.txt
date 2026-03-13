:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trgt'
.. highlight: bash

trgt
====

.. conda:recipe:: trgt
   :replaces_section_title:
   :noindex:

   Tandem repeat genotyping and visualization from PacBio HiFi data

   :homepage: https://github.com/PacificBiosciences/trgt
   :license: Pacific Biosciences Software License (https://github.com/PacificBiosciences/trgt/blob/main/LICENSE.md)
   :recipe: /`trgt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trgt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trgt/meta.yaml>`_

   


.. conda:package:: trgt

   |downloads_trgt| |docker_trgt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.0.0-0</code>,  <code>4.1.0-0</code>,  <code>4.0.0-0</code>,  <code>3.0.0-0</code>,  <code>2.1.0-0</code>,  <code>2.0.0-0</code>,  <code>1.5.1-0</code>,  <code>1.5.0-0</code>,  <code>1.4.1-0</code>,  </span></summary>
      

      ``5.0.0-0``,  ``4.1.0-0``,  ``4.0.0-0``,  ``3.0.0-0``,  ``2.1.0-0``,  ``2.0.0-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.0-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.4-0``,  ``0.3.3-0``

      
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

    pixi global install trgt

to add into an existing workspace instead, run::

    pixi add trgt

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install trgt

Alternatively, to install into a new environment, run::

    conda create -n envname trgt

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/trgt:<tag>

(see `trgt/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_trgt| image:: https://img.shields.io/conda/dn/bioconda/trgt.svg?style=flat
   :target: https://anaconda.org/bioconda/trgt
   :alt:   (downloads)
.. |docker_trgt| image:: https://quay.io/repository/biocontainers/trgt/status
   :target: https://quay.io/repository/biocontainers/trgt
.. _`trgt/tags`: https://quay.io/repository/biocontainers/trgt?tab=tags


.. raw:: html

    <script>
        var package = "trgt";
        var versions = ["5.0.0","4.1.0","4.0.0","3.0.0","2.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trgt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trgt/README.html