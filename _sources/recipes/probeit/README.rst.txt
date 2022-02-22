:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'probeit'
.. highlight: bash

probeit
=======

.. conda:recipe:: probeit
   :replaces_section_title:
   :noindex:

   Probeit\: a probe designer for detecting and genotyping pathogen\!\!\!

   :homepage: https://github.com/steineggerlab/probeit
   :license: AGPL-3.0
   :recipe: /`probeit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/probeit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/probeit/meta.yaml>`_

   


.. conda:package:: probeit

   |downloads_probeit| |docker_probeit|

   :versions:
      
      

      ``2.2-1``,  ``2.2-0``,  ``2.0-0``,  ``v1.9-1``,  ``v1.9-0``

      

   
   :depends bedtools: 
   :depends biopython: 
   :depends genmap: 
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends mmseqs2: ``>=13.45111``
   :depends numpy: 
   :depends pandas: 
   :depends primer3-py: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends seqkit: 
   :depends setuptools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install probeit

   and update with::

      conda update probeit

   or use the docker container::

      docker pull quay.io/biocontainers/probeit:<tag>

   (see `probeit/tags`_ for valid values for ``<tag>``)


.. |downloads_probeit| image:: https://img.shields.io/conda/dn/bioconda/probeit.svg?style=flat
   :target: https://anaconda.org/bioconda/probeit
   :alt:   (downloads)
.. |docker_probeit| image:: https://quay.io/repository/biocontainers/probeit/status
   :target: https://quay.io/repository/biocontainers/probeit
.. _`probeit/tags`: https://quay.io/repository/biocontainers/probeit?tab=tags


.. raw:: html

    <script>
        var package = "probeit";
        var versions = ["2.2","2.2","2.0","v1.9","v1.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/probeit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/probeit/README.html