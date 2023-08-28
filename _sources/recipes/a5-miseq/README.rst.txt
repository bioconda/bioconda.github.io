:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'a5-miseq'
.. highlight: bash

a5-miseq
========

.. conda:recipe:: a5-miseq
   :replaces_section_title:
   :noindex:

   A5\-miseq is a pipeline for assembling DNA sequence data generated on the Illumina sequencing platform. This README will take you through the steps necessary for running \_A5\-miseq\_

   :homepage: https://sourceforge.net/projects/ngop
   :license: GPLv3
   :recipe: /`a5-miseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/a5-miseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/a5-miseq/meta.yaml>`_

   


.. conda:package:: a5-miseq

   |downloads_a5-miseq| |docker_a5-miseq|

   :versions:
      
      

      ``20160825-2``,  ``20160825-1``,  ``20160825-0``

      

   
   :depends openjdk: ``>=8.0``
   :depends perl: 
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

      mamba install a5-miseq

   and update with::

      mamba update a5-miseq

  To create a new environment, run::

      mamba create --name myenvname a5-miseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/a5-miseq:<tag>

   (see `a5-miseq/tags`_ for valid values for ``<tag>``)


.. |downloads_a5-miseq| image:: https://img.shields.io/conda/dn/bioconda/a5-miseq.svg?style=flat
   :target: https://anaconda.org/bioconda/a5-miseq
   :alt:   (downloads)
.. |docker_a5-miseq| image:: https://quay.io/repository/biocontainers/a5-miseq/status
   :target: https://quay.io/repository/biocontainers/a5-miseq
.. _`a5-miseq/tags`: https://quay.io/repository/biocontainers/a5-miseq?tab=tags


.. raw:: html

    <script>
        var package = "a5-miseq";
        var versions = ["20160825","20160825","20160825"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/a5-miseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/a5-miseq/README.html