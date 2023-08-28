:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mango'
.. highlight: bash

mango
=====

.. conda:recipe:: mango
   :replaces_section_title:
   :noindex:

   A scalable genomic visualization tool

   :homepage: https://github.com/bdgenomics/mango
   :documentation: https://bdg-mango.readthedocs.io/en/latest/
   
   :developer docs: https://github.com/bigdatagenomics/mango
   :license: Apache 2
   :recipe: /`mango <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mango>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mango/meta.yaml>`_

   


.. conda:package:: mango

   |downloads_mango| |docker_mango|

   :versions:
      
      

      ``0.0.5-4``,  ``0.0.5-3``,  ``0.0.5-2``,  ``0.0.5-1``,  ``0.0.5-0``

      

   
   :depends cigar: ``0.1.3``
   :depends dask: 
   :depends distributed: 
   :depends ipykernel: ``>=5.1.2``
   :depends ipython: ``7.8.0``
   :depends ipywidgets: ``7.0.0``
   :depends matplotlib: ``2.0.2``
   :depends modin: 
   :depends openjdk: ``>=8,<9``
   :depends psutil: 
   :depends pyspark: ``2.4.4``
   :depends python: ``>3``
   :depends traitlets: ``>=4.3.0,<5.0``
   :depends traittypes: ``>=0.0.6``
   :depends widgetsnbextension: ``>=3.5.0``
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

      mamba install mango

   and update with::

      mamba update mango

  To create a new environment, run::

      mamba create --name myenvname mango

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mango:<tag>

   (see `mango/tags`_ for valid values for ``<tag>``)


.. |downloads_mango| image:: https://img.shields.io/conda/dn/bioconda/mango.svg?style=flat
   :target: https://anaconda.org/bioconda/mango
   :alt:   (downloads)
.. |docker_mango| image:: https://quay.io/repository/biocontainers/mango/status
   :target: https://quay.io/repository/biocontainers/mango
.. _`mango/tags`: https://quay.io/repository/biocontainers/mango?tab=tags


.. raw:: html

    <script>
        var package = "mango";
        var versions = ["0.0.5","0.0.5","0.0.5","0.0.5","0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mango/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mango/README.html