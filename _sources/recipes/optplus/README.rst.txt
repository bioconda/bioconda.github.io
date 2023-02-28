:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'optplus'
.. highlight: bash

optplus
=======

.. conda:recipe:: optplus
   :replaces_section_title:
   :noindex:

   additional options for optparse

   :homepage: http://noble.gs.washington.edu/~mmh1/software/optplus/
   :license: UNKNOWN
   :recipe: /`optplus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/optplus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/optplus/meta.yaml>`_

   


.. conda:package:: optplus

   |downloads_optplus| |docker_optplus|

   :versions:
      
      

      ``0.2-1``,  ``0.2-0``,  ``0.1.1-2``,  ``0.1.1-0``

      

   
   :depends python: 
   :depends six: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install optplus

   and update with::

      conda update optplus

   or use the docker container::

      docker pull quay.io/biocontainers/optplus:<tag>

   (see `optplus/tags`_ for valid values for ``<tag>``)


.. |downloads_optplus| image:: https://img.shields.io/conda/dn/bioconda/optplus.svg?style=flat
   :target: https://anaconda.org/bioconda/optplus
   :alt:   (downloads)
.. |docker_optplus| image:: https://quay.io/repository/biocontainers/optplus/status
   :target: https://quay.io/repository/biocontainers/optplus
.. _`optplus/tags`: https://quay.io/repository/biocontainers/optplus?tab=tags


.. raw:: html

    <script>
        var package = "optplus";
        var versions = ["0.2","0.2","0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/optplus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/optplus/README.html