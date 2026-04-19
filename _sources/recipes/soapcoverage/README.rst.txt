:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'soapcoverage'
.. highlight: bash

soapcoverage
============

.. conda:recipe:: soapcoverage
   :replaces_section_title:
   :noindex:

   SOAPcoverarge can calculate sequencing coverage or physical coverage as well as duplication rate and details of specific block for each segments and whole genome by using SOAP\, BLAT\, BLAST\, BlastZ\, mum\- mer and MAQ aligement results with multi\-thread.

   :homepage: http://soap.genomics.org.cn/soapaligner.html
   :license: GPL
   :recipe: /`soapcoverage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapcoverage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapcoverage/meta.yaml>`_

   


.. conda:package:: soapcoverage

   |downloads_soapcoverage| |docker_soapcoverage|

   :versions:
      
      

      ``2.7.7-0``

      

   
   :depends on libgcc: 
   :depends on zlib: ``1.2.11*``

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

    pixi global install soapcoverage

to add into an existing workspace instead, run::

    pixi add soapcoverage

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install soapcoverage

Alternatively, to install into a new environment, run::

    conda create -n envname soapcoverage

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/soapcoverage:<tag>

(see `soapcoverage/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_soapcoverage| image:: https://img.shields.io/conda/dn/bioconda/soapcoverage.svg?style=flat
   :target: https://anaconda.org/bioconda/soapcoverage
   :alt:   (downloads)
.. |docker_soapcoverage| image:: https://quay.io/repository/biocontainers/soapcoverage/status
   :target: https://quay.io/repository/biocontainers/soapcoverage
.. _`soapcoverage/tags`: https://quay.io/repository/biocontainers/soapcoverage?tab=tags


.. raw:: html

    <script>
        var package = "soapcoverage";
        var versions = ["2.7.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/soapcoverage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/soapcoverage/README.html