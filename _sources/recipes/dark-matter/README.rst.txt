:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dark-matter'
.. highlight: bash

dark-matter
===========

.. conda:recipe:: dark-matter
   :replaces_section_title:
   :noindex:

   Python library and utility scripts for working with genetic sequence data.

   :homepage: https://github.com/acorg/dark-matter
   :license: MIT
   :recipe: /`dark-matter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dark-matter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dark-matter/meta.yaml>`_

   


.. conda:package:: dark-matter

   |downloads_dark-matter| |docker_dark-matter|

   :versions:
      
      

      ``5.1.2-0``

      

   
   :depends on biopython: ``>=1.83``
   :depends on bz2file: ``>=0.98``
   :depends on cachetools: ``>=5.5.2``
   :depends on cython: ``>=0.29.16``
   :depends on dendropy: ``>=5.0.1``
   :depends on ete3: ``>=3.1.3``
   :depends on ipython: ``>=8.12.3``
   :depends on libgcc: ``>=13``
   :depends on matplotlib-base: ``>=3.7.5``
   :depends on mysql-connector-python: ``>=9.0.0``
   :depends on numpy: ``>=1.14.2``
   :depends on progressbar: ``>=2.5``
   :depends on pysam: ``>=0.23.0``
   :depends on python: ``>=3.12,<3.13.0a0``
   :depends on python-edlib: ``>=1.3.9``
   :depends on python_abi: ``3.12.* *_cp312``
   :depends on pyzmq: ``>=14.3.1``
   :depends on requests: ``>=2.32.3``
   :depends on rich: ``>=14.0.0``
   :depends on scikit-learn: ``>=1.3.2``
   :depends on simplejson: ``>=3.5.3``
   :depends on types-cachetools: ``>=5.5.0``
   :depends on types-requests: ``>=2.32.0``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install dark-matter

to add into an existing workspace instead, run::

    pixi add dark-matter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dark-matter

Alternatively, to install into a new environment, run::

    conda create -n envname dark-matter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dark-matter:<tag>

(see `dark-matter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dark-matter| image:: https://img.shields.io/conda/dn/bioconda/dark-matter.svg?style=flat
   :target: https://anaconda.org/bioconda/dark-matter
   :alt:   (downloads)
.. |docker_dark-matter| image:: https://quay.io/repository/biocontainers/dark-matter/status
   :target: https://quay.io/repository/biocontainers/dark-matter
.. _`dark-matter/tags`: https://quay.io/repository/biocontainers/dark-matter?tab=tags


.. raw:: html

    <script>
        var package = "dark-matter";
        var versions = ["5.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dark-matter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dark-matter/README.html