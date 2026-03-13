:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genologics'
.. highlight: bash

genologics
==========

.. conda:recipe:: genologics
   :replaces_section_title:
   :noindex:

   Python interface to the GenoLogics LIMS \(Laboratory Information Management System\) server via its REST API.

   :homepage: https://github.com/scilifelab/genologics
   :license: GPL3 / GNU General Public License v3 or later (GPLv3+)
   :recipe: /`genologics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genologics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genologics/meta.yaml>`_

   


.. conda:package:: genologics

   |downloads_genologics| |docker_genologics|

   :versions:
      
      

      ``0.4.1-0``,  ``0.3.12.post0-1``,  ``0.3.12.post0-0``

      

   
   :depends on python: 
   :depends on requests: 

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

    pixi global install genologics

to add into an existing workspace instead, run::

    pixi add genologics

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install genologics

Alternatively, to install into a new environment, run::

    conda create -n envname genologics

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/genologics:<tag>

(see `genologics/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_genologics| image:: https://img.shields.io/conda/dn/bioconda/genologics.svg?style=flat
   :target: https://anaconda.org/bioconda/genologics
   :alt:   (downloads)
.. |docker_genologics| image:: https://quay.io/repository/biocontainers/genologics/status
   :target: https://quay.io/repository/biocontainers/genologics
.. _`genologics/tags`: https://quay.io/repository/biocontainers/genologics?tab=tags


.. raw:: html

    <script>
        var package = "genologics";
        var versions = ["0.4.1","0.3.12.post0","0.3.12.post0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genologics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genologics/README.html