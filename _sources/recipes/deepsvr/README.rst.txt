:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepsvr'
.. highlight: bash

deepsvr
=======

.. conda:recipe:: deepsvr
   :replaces_section_title:
   :noindex:

   DeepSVR stands for deep somatic variant refinement. It uses deep learning to classify real somatic and anomalous variants in paired tumor sequencing data.

   :homepage: https://github.com/griffithlab/deepsvr
   :license: MIT
   :recipe: /`deepsvr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepsvr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepsvr/meta.yaml>`_

   


.. conda:package:: deepsvr

   |downloads_deepsvr| |docker_deepsvr|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends bam-readcount: 
   :depends click: 
   :depends convert_zero_one_based: 
   :depends h5py: 
   :depends keras: ``2.0.4``
   :depends matplotlib: 
   :depends numpy: ``1.12.1``
   :depends pandas: ``0.20.3``
   :depends python: ``3.6.1``
   :depends scikit-learn: 
   :depends seaborn: 
   :depends tensorflow: ``<=1.0.1``
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

      mamba install deepsvr

   and update with::

      mamba update deepsvr

  To create a new environment, run::

      mamba create --name myenvname deepsvr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/deepsvr:<tag>

   (see `deepsvr/tags`_ for valid values for ``<tag>``)


.. |downloads_deepsvr| image:: https://img.shields.io/conda/dn/bioconda/deepsvr.svg?style=flat
   :target: https://anaconda.org/bioconda/deepsvr
   :alt:   (downloads)
.. |docker_deepsvr| image:: https://quay.io/repository/biocontainers/deepsvr/status
   :target: https://quay.io/repository/biocontainers/deepsvr
.. _`deepsvr/tags`: https://quay.io/repository/biocontainers/deepsvr?tab=tags


.. raw:: html

    <script>
        var package = "deepsvr";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepsvr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepsvr/README.html