:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'halfdeep'
.. highlight: bash

halfdeep
========

.. conda:recipe:: halfdeep
   :replaces_section_title:
   :noindex:

   Automated detection of intervals covered at half depth by sequenced reads.

   :homepage: https://github.com/richard-burhans/HalfDeep
   :license: `BSD-3-Clause <https://github.com/richard-burhans/HalfDeep/blob/master/LICENSE>`_
   :recipe: /`halfdeep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/halfdeep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/halfdeep/meta.yaml>`_

   


.. conda:package:: halfdeep

   |downloads_halfdeep| |docker_halfdeep|

   :versions:
      
      

      ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends on bash: 
   :depends on coreutils: 
   :depends on gawk: 
   :depends on genodsp: ``>=0.0.10``
   :depends on grep: 
   :depends on gzip: 
   :depends on minimap2: 
   :depends on python: ``>=3.9``
   :depends on r-base: ``>=4.3.*``
   :depends on samtools: 
   :depends on sed: 

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

    pixi global install halfdeep

to add into an existing workspace instead, run::

    pixi add halfdeep

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install halfdeep

Alternatively, to install into a new environment, run::

    conda create -n envname halfdeep

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/halfdeep:<tag>

(see `halfdeep/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_halfdeep| image:: https://img.shields.io/conda/dn/bioconda/halfdeep.svg?style=flat
   :target: https://anaconda.org/bioconda/halfdeep
   :alt:   (downloads)
.. |docker_halfdeep| image:: https://quay.io/repository/biocontainers/halfdeep/status
   :target: https://quay.io/repository/biocontainers/halfdeep
.. _`halfdeep/tags`: https://quay.io/repository/biocontainers/halfdeep?tab=tags


.. raw:: html

    <script>
        var package = "halfdeep";
        var versions = ["0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/halfdeep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/halfdeep/README.html