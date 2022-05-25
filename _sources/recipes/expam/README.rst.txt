:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'expam'
.. highlight: bash

expam
=====

.. conda:recipe:: expam
   :replaces_section_title:
   :noindex:

   Metagenomic profiling using a reference phylogeny

   :homepage: https://github.com/seansolari/expam
   :documentation: https://expam.readthedocs.io/en/latest/
   
   :license: BSD / BSD-3-Clause
   :recipe: /`expam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/expam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/expam/meta.yaml>`_

   


.. conda:package:: expam

   |downloads_expam| |docker_expam|

   :versions:
      
      

      ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.5-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends matplotlib-base: 
   :depends numpy: ``>=1.22.0``
   :depends pandas: 
   :depends psutil: 
   :depends pytables: 
   :depends python: ``>=3.8,<3.9.0a0``
   :depends python_abi: ``3.8.* *_cp38``
   :depends requests: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install expam

   and update with::

      conda update expam

   or use the docker container::

      docker pull quay.io/biocontainers/expam:<tag>

   (see `expam/tags`_ for valid values for ``<tag>``)


.. |downloads_expam| image:: https://img.shields.io/conda/dn/bioconda/expam.svg?style=flat
   :target: https://anaconda.org/bioconda/expam
   :alt:   (downloads)
.. |docker_expam| image:: https://quay.io/repository/biocontainers/expam/status
   :target: https://quay.io/repository/biocontainers/expam
.. _`expam/tags`: https://quay.io/repository/biocontainers/expam?tab=tags


.. raw:: html

    <script>
        var package = "expam";
        var versions = ["1.1.3","1.1.2","1.1.1","1.1.0","1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/expam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/expam/README.html