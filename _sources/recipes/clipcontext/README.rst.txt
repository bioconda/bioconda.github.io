:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clipcontext'
.. highlight: bash

clipcontext
===========

.. conda:recipe:: clipcontext
   :replaces_section_title:
   :noindex:

   Extract CLIP\-seq binding regions with both genomic and transcript context

   :homepage: https://github.com/BackofenLab/CLIPcontext
   :license: MIT
   :recipe: /`clipcontext <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clipcontext>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clipcontext/meta.yaml>`_

   


.. conda:package:: clipcontext

   |downloads_clipcontext| |docker_clipcontext|

   :versions:
      
      

      ``0.7-0``,  ``0.6-0``,  ``0.3-0``,  ``0.2-0``,  ``0.1-0``

      

   
   :depends bedtools: ``2.29.0.*``
   :depends markdown: ``>=3.2.1``
   :depends matplotlib-base: ``>=3.1.3``
   :depends pandas: ``>=1.0.3``
   :depends python: ``>=3.6``
   :depends seaborn: ``>=0.10.0``
   :depends ucsc-twobitinfo: 
   :depends ucsc-twobittofa: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install clipcontext

   and update with::

      mamba update clipcontext

  To create a new environment, run::

      mamba create --name myenvname clipcontext

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/clipcontext:<tag>

   (see `clipcontext/tags`_ for valid values for ``<tag>``)


.. |downloads_clipcontext| image:: https://img.shields.io/conda/dn/bioconda/clipcontext.svg?style=flat
   :target: https://anaconda.org/bioconda/clipcontext
   :alt:   (downloads)
.. |docker_clipcontext| image:: https://quay.io/repository/biocontainers/clipcontext/status
   :target: https://quay.io/repository/biocontainers/clipcontext
.. _`clipcontext/tags`: https://quay.io/repository/biocontainers/clipcontext?tab=tags


.. raw:: html

    <script>
        var package = "clipcontext";
        var versions = ["0.7","0.6","0.3","0.2","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clipcontext/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clipcontext/README.html