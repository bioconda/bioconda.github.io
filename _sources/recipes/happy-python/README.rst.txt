:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'happy-python'
.. highlight: bash

happy-python
============

.. conda:recipe:: happy-python
   :replaces_section_title:
   :noindex:

   Haploidy and Size Completeness Estimation with Python

   :homepage: https://github.com/AntoineHo/HapPy
   :documentation: https://pypi.org/project/happy-AntoineHo/
   
   :license: MIT / MIT
   :recipe: /`happy-python <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/happy-python>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/happy-python/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-021-04118-3`

   


.. conda:package:: happy-python

   |downloads_happy-python| |docker_happy-python|

   :versions:
      
      

      ``0.2.1rc0-0``

      

   
   :depends docopt: 
   :depends matplotlib-base: 
   :depends minimap2: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.7``
   :depends sambamba: 
   :depends samtools: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install happy-python

   and update with::

      conda update happy-python

   or use the docker container::

      docker pull quay.io/biocontainers/happy-python:<tag>

   (see `happy-python/tags`_ for valid values for ``<tag>``)


.. |downloads_happy-python| image:: https://img.shields.io/conda/dn/bioconda/happy-python.svg?style=flat
   :target: https://anaconda.org/bioconda/happy-python
   :alt:   (downloads)
.. |docker_happy-python| image:: https://quay.io/repository/biocontainers/happy-python/status
   :target: https://quay.io/repository/biocontainers/happy-python
.. _`happy-python/tags`: https://quay.io/repository/biocontainers/happy-python?tab=tags


.. raw:: html

    <script>
        var package = "happy-python";
        var versions = ["0.2.1rc0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/happy-python/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/happy-python/README.html