:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'intermine'
.. highlight: bash

intermine
=========

.. conda:recipe:: intermine
   :replaces_section_title:
   :noindex:

   InterMine WebService client

   :homepage: http://www.intermine.org
   :license: LGPL / GNU Library or Lesser General Public License (LGPL) or BSD License
   :recipe: /`intermine <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/intermine>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/intermine/meta.yaml>`_

   InterMine Webservice Client\:A Python API to access bioinformatics data warehouses powered by the InterMine platform.


.. conda:package:: intermine

   |downloads_intermine| |docker_intermine|

   :versions:
      
      

      ``1.13.0-0``,  ``1.12.0-0``,  ``1.11.0-1``,  ``1.11.0-0``,  ``1.10.0-2``,  ``1.10.0-0``,  ``1.09.09-0``,  ``1.09.05-0``

      

   
   :depends on lxml: 
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

    pixi global install intermine

to add into an existing workspace instead, run::

    pixi add intermine

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install intermine

Alternatively, to install into a new environment, run::

    conda create -n envname intermine

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/intermine:<tag>

(see `intermine/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_intermine| image:: https://img.shields.io/conda/dn/bioconda/intermine.svg?style=flat
   :target: https://anaconda.org/bioconda/intermine
   :alt:   (downloads)
.. |docker_intermine| image:: https://quay.io/repository/biocontainers/intermine/status
   :target: https://quay.io/repository/biocontainers/intermine
.. _`intermine/tags`: https://quay.io/repository/biocontainers/intermine?tab=tags


.. raw:: html

    <script>
        var package = "intermine";
        var versions = ["1.13.0","1.12.0","1.11.0","1.11.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/intermine/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/intermine/README.html