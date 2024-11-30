:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dawg'
.. highlight: bash

dawg
====

.. conda:recipe:: dawg
   :replaces_section_title:
   :noindex:

   DNA Assembly with Gaps \(Dawg\) is an application designed to simulate the evolution of recombinant DNA sequences in continuous time based on the robust general time reversible model with gamma and invariant rate heterogeneity and a novel length\-dependent model of gap formation.

   :homepage: https://github.com/reedacartwright/dawg
   :license: GPL-2
   :recipe: /`dawg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dawg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dawg/meta.yaml>`_

   


.. conda:package:: dawg

   |downloads_dawg| |docker_dawg|

   :versions:
      
      

      ``2.0.beta1-8``,  ``2.0.beta1-7``,  ``2.0.beta1-6``,  ``2.0.beta1-5``,  ``2.0.beta1-4``,  ``2.0.beta1-3``,  ``2.0.beta1-2``,  ``2.0.beta1-1``,  ``2.0.beta1-0``

      

   
   :depends boost-cpp: 
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libcxx: ``>=16``
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

      mamba install dawg

   and update with::

      mamba update dawg

  To create a new environment, run::

      mamba create --name myenvname dawg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dawg:<tag>

   (see `dawg/tags`_ for valid values for ``<tag>``)


.. |downloads_dawg| image:: https://img.shields.io/conda/dn/bioconda/dawg.svg?style=flat
   :target: https://anaconda.org/bioconda/dawg
   :alt:   (downloads)
.. |docker_dawg| image:: https://quay.io/repository/biocontainers/dawg/status
   :target: https://quay.io/repository/biocontainers/dawg
.. _`dawg/tags`: https://quay.io/repository/biocontainers/dawg?tab=tags


.. raw:: html

    <script>
        var package = "dawg";
        var versions = ["2.0.beta1","2.0.beta1","2.0.beta1","2.0.beta1","2.0.beta1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dawg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dawg/README.html