:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'callingcardstools'
.. highlight: bash

callingcardstools
=================

.. conda:recipe:: callingcardstools
   :replaces_section_title:
   :noindex:

   An API and collection of cmd line tools to work with calling cards sequencing data

   :homepage: https://github.com/cmatKhan/callingCardsTools
   :documentation: https://cmatkhan.github.io/callingCardsTools/
   
   :developer docs: https://github.com/cmatKhan/callingCardsTools/tree/dev
   :license: MIT / MIT
   :recipe: /`callingcardstools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/callingcardstools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/callingcardstools/meta.yaml>`_

   


.. conda:package:: callingcardstools

   |downloads_callingcardstools| |docker_callingcardstools|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends biopython: 
   :depends edlib: 
   :depends numpy: 
   :depends pandas: 
   :depends poetry: 
   :depends pysam: 
   :depends python: ``>=3.9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install callingcardstools

   and update with::

      conda update callingcardstools

   or use the docker container::

      docker pull quay.io/biocontainers/callingcardstools:<tag>

   (see `callingcardstools/tags`_ for valid values for ``<tag>``)


.. |downloads_callingcardstools| image:: https://img.shields.io/conda/dn/bioconda/callingcardstools.svg?style=flat
   :target: https://anaconda.org/bioconda/callingcardstools
   :alt:   (downloads)
.. |docker_callingcardstools| image:: https://quay.io/repository/biocontainers/callingcardstools/status
   :target: https://quay.io/repository/biocontainers/callingcardstools
.. _`callingcardstools/tags`: https://quay.io/repository/biocontainers/callingcardstools?tab=tags


.. raw:: html

    <script>
        var package = "callingcardstools";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/callingcardstools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/callingcardstools/README.html