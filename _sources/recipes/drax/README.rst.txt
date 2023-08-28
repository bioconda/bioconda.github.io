:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'drax'
.. highlight: bash

drax
====

.. conda:recipe:: drax
   :replaces_section_title:
   :noindex:

   A pipeline for Detecting Resistome Associated taXa.

   :homepage: https://github.com/will-rowe/drax
   :license: MIT
   :recipe: /`drax <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drax>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drax/meta.yaml>`_

   


.. conda:package:: drax

   |downloads_drax| |docker_drax|

   :versions:
      
      

      ``0.0.0-4``,  ``0.0.0-3``,  ``0.0.0-2``,  ``0.0.0-1``,  ``0.0.0-0``

      

   
   :depends bbmap: ``37.90``
   :depends fastp: ``0.12.4``
   :depends fastqc: ``0.11.7``
   :depends groot: ``0.5``
   :depends kaiju: ``1.6.2``
   :depends krona: ``2.7``
   :depends metacherchant: ``0.1.0``
   :depends multiqc: ``1.4``
   :depends nextflow: ``0.27.6``
   :depends r-essentials: ``1.7.0``
   :depends samtools: ``1.4``
   :depends seqkit: ``0.7.2``
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

      mamba install drax

   and update with::

      mamba update drax

  To create a new environment, run::

      mamba create --name myenvname drax

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/drax:<tag>

   (see `drax/tags`_ for valid values for ``<tag>``)


.. |downloads_drax| image:: https://img.shields.io/conda/dn/bioconda/drax.svg?style=flat
   :target: https://anaconda.org/bioconda/drax
   :alt:   (downloads)
.. |docker_drax| image:: https://quay.io/repository/biocontainers/drax/status
   :target: https://quay.io/repository/biocontainers/drax
.. _`drax/tags`: https://quay.io/repository/biocontainers/drax?tab=tags


.. raw:: html

    <script>
        var package = "drax";
        var versions = ["0.0.0","0.0.0","0.0.0","0.0.0","0.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/drax/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/drax/README.html