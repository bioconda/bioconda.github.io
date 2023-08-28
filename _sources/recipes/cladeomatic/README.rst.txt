:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cladeomatic'
.. highlight: bash

cladeomatic
===========

.. conda:recipe:: cladeomatic
   :replaces_section_title:
   :noindex:

   Clade\-O\-Matic\: Automatic recognition of population structures based on canonical SNPs

   :homepage: https://github.com/phac-nml/cladeomatic
   :license: APACHE / Apache-2.0
   :recipe: /`cladeomatic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cladeomatic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cladeomatic/meta.yaml>`_

   


.. conda:package:: cladeomatic

   |downloads_cladeomatic| |docker_cladeomatic|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends biopython: ``1.81``
   :depends dendropy: ``4.5.2``
   :depends deprecated: ``1.2.13``
   :depends ete3: ``3.1.2``
   :depends jellyfish: 
   :depends matplotlib-base: ``3.7.1``
   :depends numpy: ``>=1.23.0``
   :depends pandas: ``>=2.0.0``
   :depends plotly: ``5.14.1``
   :depends psutil: 
   :depends pyahocorasick: ``1.4.4``
   :depends python: ``>=3.9,<3.10``
   :depends ray-default: 
   :depends scikit-learn: ``>=1.1.1``
   :depends scipy: ``>=1.10.1``
   :depends six: ``1.16.0``
   :depends snp-sites: ``2.5.1``
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

      mamba install cladeomatic

   and update with::

      mamba update cladeomatic

  To create a new environment, run::

      mamba create --name myenvname cladeomatic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cladeomatic:<tag>

   (see `cladeomatic/tags`_ for valid values for ``<tag>``)


.. |downloads_cladeomatic| image:: https://img.shields.io/conda/dn/bioconda/cladeomatic.svg?style=flat
   :target: https://anaconda.org/bioconda/cladeomatic
   :alt:   (downloads)
.. |docker_cladeomatic| image:: https://quay.io/repository/biocontainers/cladeomatic/status
   :target: https://quay.io/repository/biocontainers/cladeomatic
.. _`cladeomatic/tags`: https://quay.io/repository/biocontainers/cladeomatic?tab=tags


.. raw:: html

    <script>
        var package = "cladeomatic";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cladeomatic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cladeomatic/README.html