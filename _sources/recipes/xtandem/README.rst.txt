:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xtandem'
.. highlight: bash

xtandem
=======

.. conda:recipe:: xtandem
   :replaces_section_title:
   :noindex:

   X\! Tandem open source is software that can match tandem mass spectra with peptide sequences\, in a process that has come to be known as protein identification

   :homepage: http://www.thegpm.org/TANDEM/index.html
   :license: Artistic License
   :recipe: /`xtandem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xtandem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xtandem/meta.yaml>`_
   :links: biotools: :biotools:`xtandem`, doi: :doi:`10.1093/bioinformatics/bth092`

   


.. conda:package:: xtandem

   |downloads_xtandem| |docker_xtandem|

   :versions:
      
      

      ``15.12.15.2-4``,  ``15.12.15.2-3``,  ``15.12.15.2-2``,  ``15.12.15.2-1``,  ``15.12.15.2-0``

      

   
   :depends expat: ``>=2.2.10,<2.3.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install xtandem

   and update with::

      conda update xtandem

   or use the docker container::

      docker pull quay.io/biocontainers/xtandem:<tag>

   (see `xtandem/tags`_ for valid values for ``<tag>``)


.. |downloads_xtandem| image:: https://img.shields.io/conda/dn/bioconda/xtandem.svg?style=flat
   :target: https://anaconda.org/bioconda/xtandem
   :alt:   (downloads)
.. |docker_xtandem| image:: https://quay.io/repository/biocontainers/xtandem/status
   :target: https://quay.io/repository/biocontainers/xtandem
.. _`xtandem/tags`: https://quay.io/repository/biocontainers/xtandem?tab=tags


.. raw:: html

    <script>
        var package = "xtandem";
        var versions = ["15.12.15.2","15.12.15.2","15.12.15.2","15.12.15.2","15.12.15.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xtandem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xtandem/README.html