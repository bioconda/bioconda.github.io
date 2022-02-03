:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'psims'
.. highlight: bash

psims
=====

.. conda:recipe:: psims
   :replaces_section_title:
   :noindex:

   Writers and controlled vocabulary manager for PSI\-MS\'s mzML and mzIdentML standards

   :homepage: https://github.com/mobiusklein/psims
   :documentation: https://mobiusklein.github.io/psims/docs/build/html/
   
   :license: APACHE / Apache-2.0
   :recipe: /`psims <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psims>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psims/meta.yaml>`_

   


.. conda:package:: psims

   |downloads_psims| |docker_psims|

   :versions:
      
      

      ``0.1.45-0``

      

   
   :depends lxml: 
   :depends numpy: 
   :depends python: 
   :depends six: 
   :depends sqlalchemy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install psims

   and update with::

      conda update psims

   or use the docker container::

      docker pull quay.io/biocontainers/psims:<tag>

   (see `psims/tags`_ for valid values for ``<tag>``)


.. |downloads_psims| image:: https://img.shields.io/conda/dn/bioconda/psims.svg?style=flat
   :target: https://anaconda.org/bioconda/psims
   :alt:   (downloads)
.. |docker_psims| image:: https://quay.io/repository/biocontainers/psims/status
   :target: https://quay.io/repository/biocontainers/psims
.. _`psims/tags`: https://quay.io/repository/biocontainers/psims?tab=tags


.. raw:: html

    <script>
        var package = "psims";
        var versions = ["0.1.45"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/psims/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/psims/README.html