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

      

   
   :depends on biopython: ``1.81``
   :depends on dendropy: ``4.5.2``
   :depends on deprecated: ``1.2.13``
   :depends on ete3: ``3.1.2``
   :depends on jellyfish: 
   :depends on matplotlib-base: ``3.7.1``
   :depends on numpy: ``>=1.23.0``
   :depends on pandas: ``>=2.0.0``
   :depends on plotly: ``5.14.1``
   :depends on psutil: 
   :depends on pyahocorasick: ``1.4.4``
   :depends on python: ``>=3.9,<3.10``
   :depends on ray-default: 
   :depends on scikit-learn: ``>=1.1.1``
   :depends on scipy: ``>=1.10.1``
   :depends on six: ``1.16.0``
   :depends on snp-sites: ``2.5.1``

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

    pixi global install cladeomatic

to add into an existing workspace instead, run::

    pixi add cladeomatic

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cladeomatic

Alternatively, to install into a new environment, run::

    conda create -n envname cladeomatic

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cladeomatic:<tag>

(see `cladeomatic/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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