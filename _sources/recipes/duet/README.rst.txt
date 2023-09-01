:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'duet'
.. highlight: bash

duet
====

.. conda:recipe:: duet
   :replaces_section_title:
   :noindex:

   SNP\-Assisted Structural Variant Calling and Phasing Using Oxford Nanopore Sequencing

   :homepage: https://github.com/yekaizhou/duet
   :license: BSD / BSD-3-Clause
   :recipe: /`duet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/duet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/duet/meta.yaml>`_

   


.. conda:package:: duet

   |downloads_duet| |docker_duet|

   :versions:
      
      

      ``1.0-0``,  ``0.6-0``,  ``0.5-0``,  ``0.4-0``,  ``0.3-0``,  ``0.2-0``

      

   
   :depends bcftools: ``1.8.*``
   :depends clair3: ``1.0.3.*``
   :depends cutesv: ``2.0.2.*``
   :depends python: ``3.9.0.*``
   :depends sniffles: ``2.0.7.*``
   :depends svim: ``1.4.2.*``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install duet

   and update with::

      mamba update duet

  To create a new environment, run::

      mamba create --name myenvname duet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/duet:<tag>

   (see `duet/tags`_ for valid values for ``<tag>``)


.. |downloads_duet| image:: https://img.shields.io/conda/dn/bioconda/duet.svg?style=flat
   :target: https://anaconda.org/bioconda/duet
   :alt:   (downloads)
.. |docker_duet| image:: https://quay.io/repository/biocontainers/duet/status
   :target: https://quay.io/repository/biocontainers/duet
.. _`duet/tags`: https://quay.io/repository/biocontainers/duet?tab=tags


.. raw:: html

    <script>
        var package = "duet";
        var versions = ["1.0","0.6","0.5","0.4","0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/duet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/duet/README.html