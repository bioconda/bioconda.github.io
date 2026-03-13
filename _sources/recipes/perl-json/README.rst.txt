:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-json'
.. highlight: bash

perl-json
=========

.. conda:recipe:: perl-json
   :replaces_section_title:
   :noindex:

   JSON \(JavaScript Object Notation\) encoder\/decoder

   :homepage: https://metacpan.org/pod/JSON
   :developer docs: https://github.com/makamaka/JSON
   :license: GPL-1.0-or-later OR Artistic-1.0-Perl
   :recipe: /`perl-json <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-json>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-json/meta.yaml>`_

   


.. conda:package:: perl-json

   |downloads_perl-json| |docker_perl-json|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.10-1</code>,  <code>4.10-0</code>,  <code>4.09-0</code>,  <code>4.08-0</code>,  <code>4.07-0</code>,  <code>4.06-0</code>,  <code>4.05-0</code>,  <code>4.02-1</code>,  <code>4.02-0</code>,  </span></summary>
      

      ``4.10-1``,  ``4.10-0``,  ``4.09-0``,  ``4.08-0``,  ``4.07-0``,  ``4.06-0``,  ``4.05-0``,  ``4.02-1``,  ``4.02-0``,  ``4.00-0``,  ``2.97001-0``,  ``2.90-3``,  ``2.90-2``,  ``2.90-1``,  ``2.90-0``

      
      .. raw:: html

         </details>
      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-json-xs: 

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

    pixi global install perl-json

to add into an existing workspace instead, run::

    pixi add perl-json

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-json

Alternatively, to install into a new environment, run::

    conda create -n envname perl-json

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-json:<tag>

(see `perl-json/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-json| image:: https://img.shields.io/conda/dn/bioconda/perl-json.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-json
   :alt:   (downloads)
.. |docker_perl-json| image:: https://quay.io/repository/biocontainers/perl-json/status
   :target: https://quay.io/repository/biocontainers/perl-json
.. _`perl-json/tags`: https://quay.io/repository/biocontainers/perl-json?tab=tags


.. raw:: html

    <script>
        var package = "perl-json";
        var versions = ["4.10","4.10","4.09","4.08","4.07"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-json/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-json/README.html