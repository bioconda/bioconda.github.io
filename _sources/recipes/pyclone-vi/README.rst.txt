:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyclone-vi'
.. highlight: bash

pyclone-vi
==========

.. conda:recipe:: pyclone-vi
   :replaces_section_title:
   :noindex:

   A fast method for inferring clonal population structure

   :homepage: https://github.com/Roth-Lab/pyclone-vi
   :license: GPL3 / GPLv3
   :recipe: /`pyclone-vi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyclone-vi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyclone-vi/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-020-03919-2`

   


.. conda:package:: pyclone-vi

   |downloads_pyclone-vi| |docker_pyclone-vi|

   :versions:
      
      

      ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends click: 
   :depends h5py: 
   :depends numba: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.7``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyclone-vi

   and update with::

      conda update pyclone-vi

   or use the docker container::

      docker pull quay.io/biocontainers/pyclone-vi:<tag>

   (see `pyclone-vi/tags`_ for valid values for ``<tag>``)


.. |downloads_pyclone-vi| image:: https://img.shields.io/conda/dn/bioconda/pyclone-vi.svg?style=flat
   :target: https://anaconda.org/bioconda/pyclone-vi
   :alt:   (downloads)
.. |docker_pyclone-vi| image:: https://quay.io/repository/biocontainers/pyclone-vi/status
   :target: https://quay.io/repository/biocontainers/pyclone-vi
.. _`pyclone-vi/tags`: https://quay.io/repository/biocontainers/pyclone-vi?tab=tags


.. raw:: html

    <script>
        var package = "pyclone-vi";
        var versions = ["0.1.3","0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyclone-vi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyclone-vi/README.html