:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'variabel'
.. highlight: bash

variabel
========

.. conda:recipe:: variabel
   :replaces_section_title:
   :noindex:

   Variabel is a novel approach and method for intrahost variant detection on ONT data\, which outperforms existing ONT variant callers.

   :homepage: https://gitlab.com/treangenlab/variabel
   :license: MIT
   :recipe: /`variabel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/variabel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/variabel/meta.yaml>`_

   


.. conda:package:: variabel

   |downloads_variabel| |docker_variabel|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends biopython: 
   :depends lofreq: 
   :depends python: ``>=3.7``
   :depends pyvcf: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install variabel

   and update with::

      conda update variabel

   or use the docker container::

      docker pull quay.io/biocontainers/variabel:<tag>

   (see `variabel/tags`_ for valid values for ``<tag>``)


.. |downloads_variabel| image:: https://img.shields.io/conda/dn/bioconda/variabel.svg?style=flat
   :target: https://anaconda.org/bioconda/variabel
   :alt:   (downloads)
.. |docker_variabel| image:: https://quay.io/repository/biocontainers/variabel/status
   :target: https://quay.io/repository/biocontainers/variabel
.. _`variabel/tags`: https://quay.io/repository/biocontainers/variabel?tab=tags


.. raw:: html

    <script>
        var package = "variabel";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/variabel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/variabel/README.html