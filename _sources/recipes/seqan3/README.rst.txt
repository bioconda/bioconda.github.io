:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqan3'
.. highlight: bash

seqan3
======

.. conda:recipe:: seqan3
   :replaces_section_title:
   :noindex:

   SeqAn3 is the new version of the popular SeqAn template library for the analysis of biological sequences.

   :homepage: https://www.seqan.de
   :documentation: https://docs.seqan.de/seqan/3-master-user/
   
   :developer docs: https://github.com/seqan/seqan3
   :license: BSD / BSD-3-Clause
   :recipe: /`seqan3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqan3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqan3/meta.yaml>`_

   


.. conda:package:: seqan3

   |downloads_seqan3| |docker_seqan3|

   :versions:
      
      

      ``3.2.0-0``,  ``3.1.0-0``,  ``3.0.3-0``,  ``3.0.2-1``,  ``3.0.2-0``,  ``3.0.1-0``,  ``3.0.0-1``,  ``3.0.0-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends zlib: ``>=1.2.12,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seqan3

   and update with::

      conda update seqan3

   or use the docker container::

      docker pull quay.io/biocontainers/seqan3:<tag>

   (see `seqan3/tags`_ for valid values for ``<tag>``)


.. |downloads_seqan3| image:: https://img.shields.io/conda/dn/bioconda/seqan3.svg?style=flat
   :target: https://anaconda.org/bioconda/seqan3
   :alt:   (downloads)
.. |docker_seqan3| image:: https://quay.io/repository/biocontainers/seqan3/status
   :target: https://quay.io/repository/biocontainers/seqan3
.. _`seqan3/tags`: https://quay.io/repository/biocontainers/seqan3?tab=tags


.. raw:: html

    <script>
        var package = "seqan3";
        var versions = ["3.2.0","3.1.0","3.0.3","3.0.2","3.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqan3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqan3/README.html