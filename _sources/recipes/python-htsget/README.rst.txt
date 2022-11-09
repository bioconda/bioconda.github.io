:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-htsget'
.. highlight: bash

python-htsget
=============

.. conda:recipe:: python-htsget
   :replaces_section_title:
   :noindex:

   Python API and command line interface for the GA4GH htsget API.

   :homepage: http://pypi.python.org/pypi/htsget
   :license: APACHE / Apache Software
   :recipe: /`python-htsget <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-htsget>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-htsget/meta.yaml>`_

   


.. conda:package:: python-htsget

   |downloads_python-htsget| |docker_python-htsget|

   :versions:
      
      

      ``0.2.6-0``,  ``0.2.5-1``,  ``0.2.5-0``

      

   
   :depends humanize: 
   :depends python: 
   :depends requests: 
   :depends six: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install python-htsget

   and update with::

      conda update python-htsget

   or use the docker container::

      docker pull quay.io/biocontainers/python-htsget:<tag>

   (see `python-htsget/tags`_ for valid values for ``<tag>``)


.. |downloads_python-htsget| image:: https://img.shields.io/conda/dn/bioconda/python-htsget.svg?style=flat
   :target: https://anaconda.org/bioconda/python-htsget
   :alt:   (downloads)
.. |docker_python-htsget| image:: https://quay.io/repository/biocontainers/python-htsget/status
   :target: https://quay.io/repository/biocontainers/python-htsget
.. _`python-htsget/tags`: https://quay.io/repository/biocontainers/python-htsget?tab=tags


.. raw:: html

    <script>
        var package = "python-htsget";
        var versions = ["0.2.6","0.2.5","0.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-htsget/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-htsget/README.html