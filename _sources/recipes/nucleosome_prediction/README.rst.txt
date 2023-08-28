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
      
      

      ``3.0-6``,  ``3.0-5``,  ``3.0-4``,  ``3.0-3``,  ``3.0-2``,  ``3.0-1``,  ``3.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install nucleosome_prediction

   and update with::

      mamba update nucleosome_prediction

  To create a new environment, run::

      mamba create --name myenvname nucleosome_prediction

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nucleosome_prediction:<tag>

   (see `nucleosome_prediction/tags`_ for valid values for ``<tag>``)


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