:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'reframed'
.. highlight: bash

reframed
========

.. conda:recipe:: reframed
   :replaces_section_title:
   :noindex:

   metabolic modeling package

   :homepage: https://github.com/cdanielmachado/reframed
   :license: Apache-2.0
   :recipe: /`reframed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reframed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reframed/meta.yaml>`_
   :links: biotools: :biotools:`reframed`, doi: :doi:`10.5281/zenodo.7955995`

   


.. conda:package:: reframed

   |downloads_reframed| |docker_reframed|

   :versions:
      
      

      ``1.4.0-0``

      

   
   :depends numpy: 
   :depends python: ``>=3.6``
   :depends python-libsbml: 
   :depends scipy: 
   :depends sympy: 
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

      mamba install reframed

   and update with::

      mamba update reframed

  To create a new environment, run::

      mamba create --name myenvname reframed

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/reframed:<tag>

   (see `reframed/tags`_ for valid values for ``<tag>``)


.. |downloads_reframed| image:: https://img.shields.io/conda/dn/bioconda/reframed.svg?style=flat
   :target: https://anaconda.org/bioconda/reframed
   :alt:   (downloads)
.. |docker_reframed| image:: https://quay.io/repository/biocontainers/reframed/status
   :target: https://quay.io/repository/biocontainers/reframed
.. _`reframed/tags`: https://quay.io/repository/biocontainers/reframed?tab=tags


.. raw:: html

    <script>
        var package = "reframed";
        var versions = ["1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/reframed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/reframed/README.html