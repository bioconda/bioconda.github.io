:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shapeit5'
.. highlight: bash

shapeit5
========

.. conda:recipe:: shapeit5
   :replaces_section_title:
   :noindex:

   Fast and accurate method for estimation of haplotypes \(phasing\).

   :homepage: https://odelaneau.github.io/shapeit5
   :developer docs: https://github.com/odelaneau/shapeit5
   :license: MIT / MIT
   :recipe: /`shapeit5 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shapeit5>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shapeit5/meta.yaml>`_
   :links: doi: :doi:`10.1101/2022.10.19.512867`, biotools: :biotools:`shapeit5`

   This package provides the software SHAPEIT5. SHAPEIT5 estimates haplotypes in large datasets \(WGS\, WES\, SNP array\)\, with a special focus on rare variants.


.. conda:package:: shapeit5

   |downloads_shapeit5| |docker_shapeit5|

   :versions:
      
      

      ``5.1.1-2``,  ``5.1.1-0``,  ``1.0.0-0``

      

   
   :depends on boost-cpp: 
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on htslib: ``>=1.21,<1.24.0a0``
   :depends on libcurl: ``>=8.12.1,<9.0a0``
   :depends on libdeflate: ``>=1.22,<1.23.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.6.4,<6.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install shapeit5

to add into an existing workspace instead, run::

    pixi add shapeit5

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install shapeit5

Alternatively, to install into a new environment, run::

    conda create -n envname shapeit5

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/shapeit5:<tag>

(see `shapeit5/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_shapeit5| image:: https://img.shields.io/conda/dn/bioconda/shapeit5.svg?style=flat
   :target: https://anaconda.org/bioconda/shapeit5
   :alt:   (downloads)
.. |docker_shapeit5| image:: https://quay.io/repository/biocontainers/shapeit5/status
   :target: https://quay.io/repository/biocontainers/shapeit5
.. _`shapeit5/tags`: https://quay.io/repository/biocontainers/shapeit5?tab=tags


.. raw:: html

    <script>
        var package = "shapeit5";
        var versions = ["5.1.1","5.1.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shapeit5/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shapeit5/README.html