:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'contignet'
.. highlight: bash

contignet
=========

.. conda:recipe:: contignet
   :replaces_section_title:
   :noindex:

   ContigNet\, a deep learning based phage\-host interaction prediction tool

   :homepage: https://github.com/tianqitang1/ContigNet
   :license: OTHER / USC-RL v1.0
   :recipe: /`contignet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/contignet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/contignet/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btac239`

   


.. conda:package:: contignet

   |downloads_contignet| |docker_contignet|

   :versions:
      
      

      ``1.0.1.post3-0``

      

   
   :depends biopython: 
   :depends ete3: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends pytorch: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :depends tensorboard: 
   :depends tqdm: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install contignet

   and update with::

      mamba update contignet

  To create a new environment, run::

      mamba create --name myenvname contignet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/contignet:<tag>

   (see `contignet/tags`_ for valid values for ``<tag>``)


.. |downloads_contignet| image:: https://img.shields.io/conda/dn/bioconda/contignet.svg?style=flat
   :target: https://anaconda.org/bioconda/contignet
   :alt:   (downloads)
.. |docker_contignet| image:: https://quay.io/repository/biocontainers/contignet/status
   :target: https://quay.io/repository/biocontainers/contignet
.. _`contignet/tags`: https://quay.io/repository/biocontainers/contignet?tab=tags


.. raw:: html

    <script>
        var package = "contignet";
        var versions = ["1.0.1.post3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/contignet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/contignet/README.html