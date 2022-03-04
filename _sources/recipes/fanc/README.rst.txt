:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fanc'
.. highlight: bash

fanc
====

.. conda:recipe:: fanc
   :replaces_section_title:
   :noindex:

   Framework for the ANalysis of C\-data.

   :homepage: https://github.com/vaquerizaslab/fanc
   :documentation: https://vaquerizaslab.github.io/fanc
   
   :license: ACADEMIC PUBLIC LICENSE (FAN-C)
   :recipe: /`fanc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fanc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fanc/meta.yaml>`_

   


.. conda:package:: fanc

   |downloads_fanc| |docker_fanc|

   :versions:
      
      

      ``0.9.23b-2``,  ``0.9.0-1``,  ``0.9.0-0``

      

   
   :depends biopython: 
   :depends cooler: ``>=0.8.0``
   :depends future: 
   :depends genomic_regions: ``>=0.0.7``
   :depends gridmap: ``>=0.14.0``
   :depends h5py: 
   :depends intervaltree: 
   :depends libgcc-ng: ``>=10.3.0``
   :depends matplotlib-base: 
   :depends msgpack-numpy: ``>=0.4.4.3``
   :depends msgpack-python: 
   :depends numpy: ``>=1.16.0``
   :depends pandas: ``>=0.15.0``
   :depends pillow: 
   :depends progressbar2: 
   :depends pybedtools: 
   :depends pybigwig: 
   :depends pysam: ``>=0.9.1``
   :depends pytables: ``>=3.5.1``
   :depends python: ``>=3.7,<3.8.0a0``
   :depends python_abi: ``3.7.* *_cp37m``
   :depends pyyaml: ``>=5.1``
   :depends scikit-image: ``>=0.15.0``
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fanc

   and update with::

      conda update fanc

   or use the docker container::

      docker pull quay.io/biocontainers/fanc:<tag>

   (see `fanc/tags`_ for valid values for ``<tag>``)


.. |downloads_fanc| image:: https://img.shields.io/conda/dn/bioconda/fanc.svg?style=flat
   :target: https://anaconda.org/bioconda/fanc
   :alt:   (downloads)
.. |docker_fanc| image:: https://quay.io/repository/biocontainers/fanc/status
   :target: https://quay.io/repository/biocontainers/fanc
.. _`fanc/tags`: https://quay.io/repository/biocontainers/fanc?tab=tags


.. raw:: html

    <script>
        var package = "fanc";
        var versions = ["0.9.23b","0.9.0","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fanc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fanc/README.html