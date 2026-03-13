:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nucleosome_prediction'
.. highlight: bash

nucleosome_prediction
=====================

.. conda:recipe:: nucleosome_prediction
   :replaces_section_title:
   :noindex:

   This tool allows you to submit a genomic sequence and to recieve a prediction of the nucleosomes positions on it\,

   :homepage: https://genie.weizmann.ac.il/software/nucleo_prediction.html
   :license: LGPLv2
   :recipe: /`nucleosome_prediction <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nucleosome_prediction>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nucleosome_prediction/meta.yaml>`_

   


.. conda:package:: nucleosome_prediction

   |downloads_nucleosome_prediction| |docker_nucleosome_prediction|

   :versions:
      
      

      ``3.0-7``,  ``3.0-6``,  ``3.0-5``,  ``3.0-4``,  ``3.0-3``,  ``3.0-2``,  ``3.0-1``,  ``3.0-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``

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

    pixi global install nucleosome_prediction

to add into an existing workspace instead, run::

    pixi add nucleosome_prediction

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nucleosome_prediction

Alternatively, to install into a new environment, run::

    conda create -n envname nucleosome_prediction

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nucleosome_prediction:<tag>

(see `nucleosome_prediction/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nucleosome_prediction| image:: https://img.shields.io/conda/dn/bioconda/nucleosome_prediction.svg?style=flat
   :target: https://anaconda.org/bioconda/nucleosome_prediction
   :alt:   (downloads)
.. |docker_nucleosome_prediction| image:: https://quay.io/repository/biocontainers/nucleosome_prediction/status
   :target: https://quay.io/repository/biocontainers/nucleosome_prediction
.. _`nucleosome_prediction/tags`: https://quay.io/repository/biocontainers/nucleosome_prediction?tab=tags


.. raw:: html

    <script>
        var package = "nucleosome_prediction";
        var versions = ["3.0","3.0","3.0","3.0","3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nucleosome_prediction/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nucleosome_prediction/README.html