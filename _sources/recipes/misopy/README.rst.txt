:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'misopy'
.. highlight: bash

misopy
======

.. conda:recipe:: misopy
   :replaces_section_title:
   :noindex:

   Mixture of Isoforms model \(MISO\) for isoform quantitation using RNA\-Seq

   :homepage: http://genes.mit.edu/burgelab/miso/
   :license: GPL2 / GPL2
   :recipe: /`misopy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/misopy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/misopy/meta.yaml>`_

   


.. conda:package:: misopy

   |downloads_misopy| |docker_misopy|

   :versions:
      
      

      ``0.5.4-5``,  ``0.5.4-4``,  ``0.5.4-3``,  ``0.5.4-2``,  ``0.5.4-1``,  ``0.5.4-0``

      

   
   :depends on bedtools: 
   :depends on libgcc-ng: ``>=10.3.0``
   :depends on matplotlib: 
   :depends on numpy: ``>=1.5.0``
   :depends on pysam: ``>=0.6.0``
   :depends on python: ``>=2.7,<2.8.0a0``
   :depends on python_abi: ``2.7.* *_cp27mu``
   :depends on samtools: ``<=1.2``
   :depends on scipy: ``>=0.9.0``

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

    pixi global install misopy

to add into an existing workspace instead, run::

    pixi add misopy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install misopy

Alternatively, to install into a new environment, run::

    conda create -n envname misopy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/misopy:<tag>

(see `misopy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_misopy| image:: https://img.shields.io/conda/dn/bioconda/misopy.svg?style=flat
   :target: https://anaconda.org/bioconda/misopy
   :alt:   (downloads)
.. |docker_misopy| image:: https://quay.io/repository/biocontainers/misopy/status
   :target: https://quay.io/repository/biocontainers/misopy
.. _`misopy/tags`: https://quay.io/repository/biocontainers/misopy?tab=tags


.. raw:: html

    <script>
        var package = "misopy";
        var versions = ["0.5.4","0.5.4","0.5.4","0.5.4","0.5.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/misopy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/misopy/README.html