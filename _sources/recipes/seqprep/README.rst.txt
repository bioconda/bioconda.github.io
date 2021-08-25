:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqprep'
.. highlight: bash

seqprep
=======

.. conda:recipe:: seqprep
   :replaces_section_title:
   :noindex:

   Tool for stripping adaptors and\/or merging paired reads with overlap into single reads.

   :homepage: https://github.com/jstjohn/SeqPrep
   :license: MIT / MIT
   :recipe: /`seqprep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqprep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqprep/meta.yaml>`_
   :links: biotools: :biotools:`seqprep`, doi: :doi:`10.1134/S1021443716020175`

   


.. conda:package:: seqprep

   |downloads_seqprep| |docker_seqprep|

   :versions:
      
      

      ``1.3.2-5``,  ``1.3.2-4``,  ``1.3.2-3``,  ``1.3.2-2``,  ``1.2-1``,  ``1.2-0``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seqprep

   and update with::

      conda update seqprep

   or use the docker container::

      docker pull quay.io/biocontainers/seqprep:<tag>

   (see `seqprep/tags`_ for valid values for ``<tag>``)


.. |downloads_seqprep| image:: https://img.shields.io/conda/dn/bioconda/seqprep.svg?style=flat
   :target: https://anaconda.org/bioconda/seqprep
   :alt:   (downloads)
.. |docker_seqprep| image:: https://quay.io/repository/biocontainers/seqprep/status
   :target: https://quay.io/repository/biocontainers/seqprep
.. _`seqprep/tags`: https://quay.io/repository/biocontainers/seqprep?tab=tags


.. raw:: html

    <script>
        var package = "seqprep";
        var versions = ["1.3.2","1.3.2","1.3.2","1.3.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqprep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqprep/README.html