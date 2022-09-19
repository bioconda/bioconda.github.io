:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phip-stat'
.. highlight: bash

phip-stat
=========

.. conda:recipe:: phip-stat
   :replaces_section_title:
   :noindex:

   PhIP\-seq analysis tools

   :homepage: https://github.com/lasersonlab/phip-stat
   :license: Apache-2.0
   :recipe: /`phip-stat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phip-stat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phip-stat/meta.yaml>`_

   


.. conda:package:: phip-stat

   |downloads_phip-stat| |docker_phip-stat|

   :versions:
      
      

      ``0.5.1-0``

      

   
   :depends click: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends scipy: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phip-stat

   and update with::

      conda update phip-stat

   or use the docker container::

      docker pull quay.io/biocontainers/phip-stat:<tag>

   (see `phip-stat/tags`_ for valid values for ``<tag>``)


.. |downloads_phip-stat| image:: https://img.shields.io/conda/dn/bioconda/phip-stat.svg?style=flat
   :target: https://anaconda.org/bioconda/phip-stat
   :alt:   (downloads)
.. |docker_phip-stat| image:: https://quay.io/repository/biocontainers/phip-stat/status
   :target: https://quay.io/repository/biocontainers/phip-stat
.. _`phip-stat/tags`: https://quay.io/repository/biocontainers/phip-stat?tab=tags


.. raw:: html

    <script>
        var package = "phip-stat";
        var versions = ["0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phip-stat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phip-stat/README.html