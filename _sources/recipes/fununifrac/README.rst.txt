:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fununifrac'
.. highlight: bash

fununifrac
==========

.. conda:recipe:: fununifrac
   :replaces_section_title:
   :noindex:

   A repository to implement UniFrac\, but on functional profiles of metagenomic data.

   :homepage: https://github.com/KoslickiLab/FunUniFrac
   :license: BSD / BSD-3-Clause
   :recipe: /`fununifrac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fununifrac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fununifrac/meta.yaml>`_

   


.. conda:package:: fununifrac

   |downloads_fununifrac| |docker_fununifrac|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends blist: 
   :depends networkx: ``2.8.4.*``
   :depends numpy: ``1.23.2.*``
   :depends pandas: ``1.4.3.*``
   :depends pyemd: ``0.5.1.*``
   :depends pytest: 
   :depends python: 
   :depends requests: 
   :depends scipy: ``1.8.0.*``
   :depends seaborn: 
   :depends sparse: 
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

      mamba install fununifrac

   and update with::

      mamba update fununifrac

  To create a new environment, run::

      mamba create --name myenvname fununifrac

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fununifrac:<tag>

   (see `fununifrac/tags`_ for valid values for ``<tag>``)


.. |downloads_fununifrac| image:: https://img.shields.io/conda/dn/bioconda/fununifrac.svg?style=flat
   :target: https://anaconda.org/bioconda/fununifrac
   :alt:   (downloads)
.. |docker_fununifrac| image:: https://quay.io/repository/biocontainers/fununifrac/status
   :target: https://quay.io/repository/biocontainers/fununifrac
.. _`fununifrac/tags`: https://quay.io/repository/biocontainers/fununifrac?tab=tags


.. raw:: html

    <script>
        var package = "fununifrac";
        var versions = ["0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fununifrac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fununifrac/README.html