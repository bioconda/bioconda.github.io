:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sv2'
.. highlight: bash

sv2
===

.. conda:recipe:: sv2
   :replaces_section_title:
   :noindex:

   Support Vector Structural Variation Genotyper

   :homepage: https://github.com/dantaki/SV2
   :license: MIT
   :recipe: /`sv2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sv2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sv2/meta.yaml>`_

   


.. conda:package:: sv2

   |downloads_sv2| |docker_sv2|

   :versions:
      
      

      ``1.4.3.4-7``,  ``1.4.3.4-6``,  ``1.4.3.4-5``,  ``1.4.3.4-4``,  ``1.4.3.4-3``,  ``1.4.3.4-2``,  ``1.4.3.4-1``,  ``1.4.3.4-0``

      

   
   :depends bedtools: 
   :depends libgcc-ng: ``>=10.3.0``
   :depends numpy: 
   :depends pandas: 
   :depends pybedtools: 
   :depends pysam: ``>=0.9``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python-wget: 
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends scikit-learn: ``>=0.19``
   :depends wget: 
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

      mamba install sv2

   and update with::

      mamba update sv2

  To create a new environment, run::

      mamba create --name myenvname sv2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sv2:<tag>

   (see `sv2/tags`_ for valid values for ``<tag>``)


.. |downloads_sv2| image:: https://img.shields.io/conda/dn/bioconda/sv2.svg?style=flat
   :target: https://anaconda.org/bioconda/sv2
   :alt:   (downloads)
.. |docker_sv2| image:: https://quay.io/repository/biocontainers/sv2/status
   :target: https://quay.io/repository/biocontainers/sv2
.. _`sv2/tags`: https://quay.io/repository/biocontainers/sv2?tab=tags


.. raw:: html

    <script>
        var package = "sv2";
        var versions = ["1.4.3.4","1.4.3.4","1.4.3.4","1.4.3.4","1.4.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sv2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sv2/README.html