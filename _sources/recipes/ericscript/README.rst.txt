:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ericscript'
.. highlight: bash

ericscript
==========

.. conda:recipe:: ericscript
   :replaces_section_title:
   :noindex:

   EricScript is a computational framework for the discovery of gene fusions in paired end RNA\-seq data. It is able to generate synthetic gene fusions by using the EricScript simulator and calculate a number of statistical measures for evaluating gene fusion detection methods performance with EricScript CalcStats.

   :homepage: https://sites.google.com/site/bioericscript
   :license: GPL3 / GPL3
   :recipe: /`ericscript <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ericscript>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ericscript/meta.yaml>`_

   


.. conda:package:: ericscript

   |downloads_ericscript| |docker_ericscript|

   :versions:
      
      

      ``0.5.5-5``,  ``0.5.5-4``,  ``0.5.5-3``,  ``0.5.5-2``,  ``0.5.5-1``,  ``0.5.5-0``

      

   
   :depends on bedtools: 
   :depends on blat: 
   :depends on bwa: 
   :depends on perl: 
   :depends on r-ada: 
   :depends on r-base: 
   :depends on samtools: ``0.1.19.*``
   :depends on seqtk: 

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

    pixi global install ericscript

to add into an existing workspace instead, run::

    pixi add ericscript

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ericscript

Alternatively, to install into a new environment, run::

    conda create -n envname ericscript

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ericscript:<tag>

(see `ericscript/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ericscript| image:: https://img.shields.io/conda/dn/bioconda/ericscript.svg?style=flat
   :target: https://anaconda.org/bioconda/ericscript
   :alt:   (downloads)
.. |docker_ericscript| image:: https://quay.io/repository/biocontainers/ericscript/status
   :target: https://quay.io/repository/biocontainers/ericscript
.. _`ericscript/tags`: https://quay.io/repository/biocontainers/ericscript?tab=tags


.. raw:: html

    <script>
        var package = "ericscript";
        var versions = ["0.5.5","0.5.5","0.5.5","0.5.5","0.5.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ericscript/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ericscript/README.html