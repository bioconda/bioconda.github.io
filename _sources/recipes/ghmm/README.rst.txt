:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ghmm'
.. highlight: bash

ghmm
====

.. conda:recipe:: ghmm
   :replaces_section_title:
   :noindex:

   General Hidden Markov Model library \(GHMM\) is a freely available C library implementing efficient data structures and algorithms for basic and extended HMMs with discrete and continous emissions

   :homepage: http://ghmm.org/
   :license: GPL2
   :recipe: /`ghmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ghmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ghmm/meta.yaml>`_

   


.. conda:package:: ghmm

   |downloads_ghmm| |docker_ghmm|

   :versions:
      
      

      ``0.9-2``,  ``0.9-1``,  ``0.9-0``

      

   
   :depends libxml2: ``>=2.9.14,<2.10.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27m``
   :depends swig: 
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

      mamba install ghmm

   and update with::

      mamba update ghmm

  To create a new environment, run::

      mamba create --name myenvname ghmm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ghmm:<tag>

   (see `ghmm/tags`_ for valid values for ``<tag>``)


.. |downloads_ghmm| image:: https://img.shields.io/conda/dn/bioconda/ghmm.svg?style=flat
   :target: https://anaconda.org/bioconda/ghmm
   :alt:   (downloads)
.. |docker_ghmm| image:: https://quay.io/repository/biocontainers/ghmm/status
   :target: https://quay.io/repository/biocontainers/ghmm
.. _`ghmm/tags`: https://quay.io/repository/biocontainers/ghmm?tab=tags


.. raw:: html

    <script>
        var package = "ghmm";
        var versions = ["0.9","0.9","0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ghmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ghmm/README.html