:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pypgx'
.. highlight: bash

pypgx
=====

.. conda:recipe:: pypgx
   :replaces_section_title:
   :noindex:

   A Python package for pharmacogenomics research

   :homepage: https://github.com/sbslee/pypgx
   :documentation: https://pypgx.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`pypgx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypgx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypgx/meta.yaml>`_

   


.. conda:package:: pypgx

   |downloads_pypgx| |docker_pypgx|

   :versions:
      
      

      ``0.10.0-0``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.1-0``

      

   
   :depends fuc: 
   :depends openjdk: 
   :depends python: 
   :depends scikit-learn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pypgx

   and update with::

      conda update pypgx

   or use the docker container::

      docker pull quay.io/biocontainers/pypgx:<tag>

   (see `pypgx/tags`_ for valid values for ``<tag>``)


.. |downloads_pypgx| image:: https://img.shields.io/conda/dn/bioconda/pypgx.svg?style=flat
   :target: https://anaconda.org/bioconda/pypgx
   :alt:   (downloads)
.. |docker_pypgx| image:: https://quay.io/repository/biocontainers/pypgx/status
   :target: https://quay.io/repository/biocontainers/pypgx
.. _`pypgx/tags`: https://quay.io/repository/biocontainers/pypgx?tab=tags


.. raw:: html

    <script>
        var package = "pypgx";
        var versions = ["0.10.0","0.9.0","0.8.0","0.7.0","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pypgx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pypgx/README.html