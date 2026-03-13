:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hiddendomains'
.. highlight: bash

hiddendomains
=============

.. conda:recipe:: hiddendomains
   :replaces_section_title:
   :noindex:

   hiddenDomains is a suite of programs used to identify significant enrichment of ChIP\-seq reads that span large domains.

   :homepage: http://hiddendomains.sourceforge.net/
   :license: GPL / GNU GPL
   :recipe: /`hiddendomains <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hiddendomains>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hiddendomains/meta.yaml>`_

   


.. conda:package:: hiddendomains

   |downloads_hiddendomains| |docker_hiddendomains|

   :versions:
      
      

      ``3.1-5``,  ``3.1-4``,  ``3.1-3``,  ``3.1-2``,  ``3.1-1``,  ``3.1-0``,  ``3.0-0``

      

   
   :depends on bedtools: 
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-depmixs4: 
   :depends on r-hiddenmarkov: 
   :depends on samtools: 

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

    pixi global install hiddendomains

to add into an existing workspace instead, run::

    pixi add hiddendomains

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hiddendomains

Alternatively, to install into a new environment, run::

    conda create -n envname hiddendomains

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hiddendomains:<tag>

(see `hiddendomains/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hiddendomains| image:: https://img.shields.io/conda/dn/bioconda/hiddendomains.svg?style=flat
   :target: https://anaconda.org/bioconda/hiddendomains
   :alt:   (downloads)
.. |docker_hiddendomains| image:: https://quay.io/repository/biocontainers/hiddendomains/status
   :target: https://quay.io/repository/biocontainers/hiddendomains
.. _`hiddendomains/tags`: https://quay.io/repository/biocontainers/hiddendomains?tab=tags


.. raw:: html

    <script>
        var package = "hiddendomains";
        var versions = ["3.1","3.1","3.1","3.1","3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hiddendomains/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hiddendomains/README.html