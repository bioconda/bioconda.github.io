:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qiime'
.. highlight: bash

qiime
=====

.. conda:recipe:: qiime/1.9.1
   :replaces_section_title:
   :noindex:

   Quantitative Insights Into Microbial Ecology

   :homepage: http://www.qiime.org
   :license: GNU General Public License v2 (GPLv2)
   :recipe: /`qiime <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qiime>`_/`1.9.1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qiime/1.9.1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qiime/1.9.1/meta.yaml>`_
   :links: biotools: :biotools:`qiime`, doi: :doi:`10.1038/nmeth.f.303`

   


.. conda:package:: qiime

   |downloads_qiime| |docker_qiime|

   :versions:
      
      

      ``1.9.1-3``,  ``1.9.1-1``,  ``1.9.1-0``,  ``1.8.0-1``,  ``1.8.0-0``

      

   
   :depends biom-format: ``>=2.1.4,<2.2.0``
   :depends burrito: ``>=0.9.1,<1.0.0``
   :depends burrito-fillings: ``>=0.1.1,<0.2.0``
   :depends cogent: ``1.5.3``
   :depends emperor: ``>=0.9.51,<1.0.0``
   :depends gdata: 
   :depends matplotlib-base: 
   :depends natsort: ``<5.0.0``
   :depends numpy: 
   :depends pandas: ``>=0.13.1``
   :depends pynast: ``1.2.2``
   :depends python: ``<3``
   :depends qcli: ``>=0.1.1,<0.2.0``
   :depends qiime-default-reference: ``>=0.1.2,<0.2.0``
   :depends scikit-bio: ``>=0.2.3,<0.3.0``
   :depends scipy: ``>=0.14.0``
   :depends xorg-libsm: 
   :depends xorg-libxau: 
   :depends xorg-libxdmcp: 
   :depends xorg-libxext: 
   :depends xorg-libxrender: 
   :depends xz: 
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

      mamba install qiime

   and update with::

      mamba update qiime

  To create a new environment, run::

      mamba create --name myenvname qiime

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/qiime:<tag>

   (see `qiime/tags`_ for valid values for ``<tag>``)


.. |downloads_qiime| image:: https://img.shields.io/conda/dn/bioconda/qiime.svg?style=flat
   :target: https://anaconda.org/bioconda/qiime
   :alt:   (downloads)
.. |docker_qiime| image:: https://quay.io/repository/biocontainers/qiime/status
   :target: https://quay.io/repository/biocontainers/qiime
.. _`qiime/tags`: https://quay.io/repository/biocontainers/qiime?tab=tags


.. raw:: html

    <script>
        var package = "qiime";
        var versions = ["1.9.1","1.9.1","1.9.1","1.8.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qiime/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qiime/README.html