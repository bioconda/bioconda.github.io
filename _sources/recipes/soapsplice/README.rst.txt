:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'soapsplice'
.. highlight: bash

soapsplice
==========

.. conda:recipe:: soapsplice
   :replaces_section_title:
   :noindex:

   We have developed a tool SOAPsplice for genome\-wide ab initio detection of splice junction sites from RNA\-Seq\, a method using new generation sequencing technologies to sequence the messenger RNA.

   :homepage: http://soap.genomics.org.cn/soapsplice.html
   :license: freely available
   :recipe: /`soapsplice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapsplice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapsplice/meta.yaml>`_
   :links: biotools: :biotools:`SOAPsplice`, doi: :doi:`10.3389/fgene.2011.00046`

   


.. conda:package:: soapsplice

   |downloads_soapsplice| |docker_soapsplice|

   :versions:
      
      

      ``1.10-3``,  ``1.10-2``,  ``1.10-1``,  ``1.10-0``

      

   
   :depends on zlib: 

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

    pixi global install soapsplice

to add into an existing workspace instead, run::

    pixi add soapsplice

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install soapsplice

Alternatively, to install into a new environment, run::

    conda create -n envname soapsplice

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/soapsplice:<tag>

(see `soapsplice/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_soapsplice| image:: https://img.shields.io/conda/dn/bioconda/soapsplice.svg?style=flat
   :target: https://anaconda.org/bioconda/soapsplice
   :alt:   (downloads)
.. |docker_soapsplice| image:: https://quay.io/repository/biocontainers/soapsplice/status
   :target: https://quay.io/repository/biocontainers/soapsplice
.. _`soapsplice/tags`: https://quay.io/repository/biocontainers/soapsplice?tab=tags


.. raw:: html

    <script>
        var package = "soapsplice";
        var versions = ["1.10","1.10","1.10","1.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/soapsplice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/soapsplice/README.html