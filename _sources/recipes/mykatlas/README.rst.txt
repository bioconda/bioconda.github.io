:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mykatlas'
.. highlight: bash

mykatlas
========

.. conda:recipe:: mykatlas
   :replaces_section_title:
   :noindex:

   Assists in discoveries of antibiotic\-resistance with mykrobe

   :homepage: http://github.com/phelimb/atlas
   :license: MIT / MIT
   :recipe: /`mykatlas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mykatlas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mykatlas/meta.yaml>`_

   


.. conda:package:: mykatlas

   |downloads_mykatlas| |docker_mykatlas|

   :versions:
      
      

      ``0.6.1-7``,  ``0.6.1-6``,  ``0.6.1-5``,  ``0.6.1-4``,  ``0.6.1-3``,  ``0.6.1-2``,  ``0.6.1-1``,  ``0.6.1-0``

      

   
   :depends biopython: 
   :depends future: 
   :depends ga4ghmongo: 
   :depends mongoengine: 
   :depends python: ``>=3.8,<3.9.0a0``
   :depends python_abi: ``3.8.* *_cp38``
   :depends pyvcf: 
   :depends redis-py: 
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

      mamba install mykatlas

   and update with::

      mamba update mykatlas

  To create a new environment, run::

      mamba create --name myenvname mykatlas

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mykatlas:<tag>

   (see `mykatlas/tags`_ for valid values for ``<tag>``)


.. |downloads_mykatlas| image:: https://img.shields.io/conda/dn/bioconda/mykatlas.svg?style=flat
   :target: https://anaconda.org/bioconda/mykatlas
   :alt:   (downloads)
.. |docker_mykatlas| image:: https://quay.io/repository/biocontainers/mykatlas/status
   :target: https://quay.io/repository/biocontainers/mykatlas
.. _`mykatlas/tags`: https://quay.io/repository/biocontainers/mykatlas?tab=tags


.. raw:: html

    <script>
        var package = "mykatlas";
        var versions = ["0.6.1","0.6.1","0.6.1","0.6.1","0.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mykatlas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mykatlas/README.html