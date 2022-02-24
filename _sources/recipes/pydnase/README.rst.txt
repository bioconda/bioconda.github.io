:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pydnase'
.. highlight: bash

pydnase
=======

.. conda:recipe:: pydnase
   :replaces_section_title:
   :noindex:

   DNase\-seq analysis library

   :homepage: http://jpiper.github.io/pyDNase
   :documentation: http://pythonhosted.org/pyDNase/index.html
   
   :license: MIT / MIT
   :recipe: /`pydnase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydnase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydnase/meta.yaml>`_

   A suite of tools for analysing DNase\-seq data.


.. conda:package:: pydnase

   |downloads_pydnase| |docker_pydnase|

   :versions:
      
      

      ``0.3.0-4``,  ``0.3.0-3``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.6-1``,  ``0.2.6-0``

      

   
   :depends bedtools: 
   :depends clint: 
   :depends libgcc-ng: ``>=10.3.0``
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pybedtools: 
   :depends pysam: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pydnase

   and update with::

      conda update pydnase

   or use the docker container::

      docker pull quay.io/biocontainers/pydnase:<tag>

   (see `pydnase/tags`_ for valid values for ``<tag>``)


.. |downloads_pydnase| image:: https://img.shields.io/conda/dn/bioconda/pydnase.svg?style=flat
   :target: https://anaconda.org/bioconda/pydnase
   :alt:   (downloads)
.. |docker_pydnase| image:: https://quay.io/repository/biocontainers/pydnase/status
   :target: https://quay.io/repository/biocontainers/pydnase
.. _`pydnase/tags`: https://quay.io/repository/biocontainers/pydnase?tab=tags


.. raw:: html

    <script>
        var package = "pydnase";
        var versions = ["0.3.0","0.3.0","0.3.0","0.3.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pydnase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pydnase/README.html