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

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install fanc

   and update with::

      mamba update fanc

  To create a new environment, run::

      mamba create --name myenvname fanc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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