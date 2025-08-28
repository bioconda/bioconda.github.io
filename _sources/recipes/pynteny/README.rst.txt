:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pynteny'
.. highlight: bash

pynteny
=======

.. conda:recipe:: pynteny
   :replaces_section_title:
   :noindex:

   Multiple HMM \- search via synteny structures in Python

   :homepage: http://github.com/robaina/Pynteny
   :documentation: https://robaina.github.io/Pynteny/
   
   :license: Apache-2.0 license
   :recipe: /`pynteny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pynteny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pynteny/meta.yaml>`_
   :links: DOI: :DOI:`10.5281/zenodo.7082448`

   Multiple HMM \- search via synteny structures in Python


.. conda:package:: pynteny

   |downloads_pynteny| |docker_pynteny|

   :versions:
      
      

      ``1.0.0-0``,  ``0.0.5-0``

      

   
   :depends biopython: 
   :depends hmmer: 
   :depends libgcc-ng: ``>=12``
   :depends numpy: 
   :depends pandas: 
   :depends prodigal: 
   :depends psutil: 
   :depends pyfastx: ``>=0.8``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends requests: 
   :depends seqkit: 
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

      mamba install pynteny

   and update with::

      mamba update pynteny

  To create a new environment, run::

      mamba create --name myenvname pynteny

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pynteny:<tag>

   (see `pynteny/tags`_ for valid values for ``<tag>``)


.. |downloads_pynteny| image:: https://img.shields.io/conda/dn/bioconda/pynteny.svg?style=flat
   :target: https://anaconda.org/bioconda/pynteny
   :alt:   (downloads)
.. |docker_pynteny| image:: https://quay.io/repository/biocontainers/pynteny/status
   :target: https://quay.io/repository/biocontainers/pynteny
.. _`pynteny/tags`: https://quay.io/repository/biocontainers/pynteny?tab=tags


.. raw:: html

    <script>
        var package = "pynteny";
        var versions = ["1.0.0","0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pynteny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pynteny/README.html