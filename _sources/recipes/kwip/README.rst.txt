:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kwip'
.. highlight: bash

kwip
====

.. conda:recipe:: kwip
   :replaces_section_title:
   :noindex:

   kWIP implements a de novo\, alignment free measure of sample genetic dissimilarity

   :homepage: https://github.com/kdmurray91/kWIP
   :license: GNU General Public License version 3
   :recipe: /`kwip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kwip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kwip/meta.yaml>`_
   :links: biotools: :biotools:`kWIP`, doi: :doi:`https://doi.org/10.1371/journal.pcbi.1005727`

   


.. conda:package:: kwip

   |downloads_kwip| |docker_kwip|

   :versions:
      
      

      ``0.2.0-6``,  ``0.2.0-5``,  ``0.2.0-4``,  ``0.2.0-3``,  ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``

      

   
   :depends on khmer: 
   :depends on libcxx: ``>=15.0.7``
   :depends on libzlib: ``>=1.2.13,<1.3.0a0``
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

    pixi global install kwip

to add into an existing workspace instead, run::

    pixi add kwip

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kwip

Alternatively, to install into a new environment, run::

    conda create -n envname kwip

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kwip:<tag>

(see `kwip/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kwip| image:: https://img.shields.io/conda/dn/bioconda/kwip.svg?style=flat
   :target: https://anaconda.org/bioconda/kwip
   :alt:   (downloads)
.. |docker_kwip| image:: https://quay.io/repository/biocontainers/kwip/status
   :target: https://quay.io/repository/biocontainers/kwip
.. _`kwip/tags`: https://quay.io/repository/biocontainers/kwip?tab=tags


.. raw:: html

    <script>
        var package = "kwip";
        var versions = ["0.2.0","0.2.0","0.2.0","0.2.0","0.2.0"];
    </script>





Notes
-----
The k\-mer Weighted Inner Product \(kWIP\) implements a de novo\, alignment free measure of sample genetic dissimilarity which operates upon raw sequencing reads. It is able to calculate the genetic dissimilarity between samples without any reference genome\, and without assembling one.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kwip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kwip/README.html