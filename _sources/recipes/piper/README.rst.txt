:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'piper'
.. highlight: bash

piper
=====

.. conda:recipe:: piper
   :replaces_section_title:
   :noindex:

   A lightweight python toolkit for gluing together restartable\, robust command line pipelines

   :homepage: https://github.com/databio/pypiper/
   :license: BSD / BSD-2-Clause
   :recipe: /`piper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piper/meta.yaml>`_

   


.. conda:package:: piper

   |downloads_piper| |docker_piper|

   :versions:
      
      

      ``0.12.3-0``,  ``0.12.1-1``,  ``0.12.1-0``

      

   
   :depends attmap: ``>=0.12.5``
   :depends logmuse: ``>=0.2.4``
   :depends pandas: 
   :depends psutil: 
   :depends python: ``>=3``
   :depends ubiquerg: ``>=0.4.5``
   :depends yacman: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install piper

   and update with::

      conda update piper

   or use the docker container::

      docker pull quay.io/biocontainers/piper:<tag>

   (see `piper/tags`_ for valid values for ``<tag>``)


.. |downloads_piper| image:: https://img.shields.io/conda/dn/bioconda/piper.svg?style=flat
   :target: https://anaconda.org/bioconda/piper
   :alt:   (downloads)
.. |docker_piper| image:: https://quay.io/repository/biocontainers/piper/status
   :target: https://quay.io/repository/biocontainers/piper
.. _`piper/tags`: https://quay.io/repository/biocontainers/piper?tab=tags


.. raw:: html

    <script>
        var package = "piper";
        var versions = ["0.12.3","0.12.1","0.12.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/piper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/piper/README.html